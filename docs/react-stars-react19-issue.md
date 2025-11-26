# React-Stars Library Incompatibility with React 19

## 📋 Problem Summary

When using the `react-stars` library in a React 19 project, the application crashes with the following error:

```
Error: Cannot read properties of undefined (reading 'Component')
```

Or in some cases:

```
TypeError: Cannot read properties of undefined (reading 'componentWillReceiveProps')
```

---

## 🔍 Root Cause Analysis

### The Issue

The `react-stars` library (last updated in 2017) uses **deprecated lifecycle methods** that have been **completely removed in React 19**.

### The Problematic Code in react-stars

```jsx
// Inside react-stars library (class component)
class ReactStars extends React.Component {
  componentWillReceiveProps(nextProps) {
    // This method no longer exists in React 19!
    this.setState({ value: nextProps.value });
  }
}
```

### Timeline of Deprecation

| React Version           | Status                                                                   |
| ----------------------- | ------------------------------------------------------------------------ |
| React 16.3 (March 2018) | `componentWillReceiveProps` marked as deprecated, `UNSAFE_` prefix added |
| React 16.x              | Deprecation warnings shown in development                                |
| React 17.0              | Only `UNSAFE_componentWillReceiveProps` works                            |
| **React 19.0**          | **Completely removed** - causes crash!                                   |

---

## 📚 Official React Documentation References

### 1. React Component API Reference

**URL:** https://react.dev/reference/react/Component#componentwillreceiveprops

> **Deprecated**
>
> This API has been renamed from `componentWillReceiveProps` to `UNSAFE_componentWillReceiveProps`. The old name has been deprecated. In a future major version of React, only the new name will work.

### 2. React 19 Upgrade Guide

**URL:** https://react.dev/blog/2024/04/25/react-19-upgrade-guide

Documents all breaking changes in React 19, including the removal of deprecated APIs.

### 3. Update on Async Rendering (March 2018)

**URL:** https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html

> "One of the biggest lessons we've learned is that some of our legacy component lifecycles tend to encourage unsafe coding practices. They are:
>
> - `componentWillMount`
> - `componentWillReceiveProps`
> - `componentWillUpdate`
>
> These lifecycle methods have often been misunderstood and subtly misused; **furthermore, we anticipate that their potential misuse may be more problematic with async rendering**."

### 4. Strict Mode Documentation

**URL:** https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects

> "The commit phase is usually very fast, but rendering can be slow. For this reason, **the upcoming concurrent mode breaks the rendering work into pieces, pausing and resuming the work to avoid blocking the browser**. This means that **React may invoke render phase lifecycles more than once before committing, or it may invoke them without committing at all**."

---

## 🎯 Why These Methods Are "Unsafe"

### The Problem: Suspense and Concurrent Mode

React's **Suspense** and **Concurrent Mode** can:

1. **Pause rendering** mid-way through a component tree
2. **Show a fallback** (loading spinner)
3. **Resume or restart** rendering later

### How Rendering Changed

**Old Model (React 16 and before):**

```
componentWillReceiveProps → render → componentDidUpdate
        ↓                      ↓              ↓
   Called ONCE             Called ONCE    Called ONCE
```

**New Model (with Suspense/Concurrent Mode):**

```
componentWillReceiveProps → render → [SUSPENSE PAUSE] → restart!
        ↓                      ↓
   Called ONCE             Interrupted...

componentWillReceiveProps → render → [SUSPENSE PAUSE] → restart again!
        ↓                      ↓
   Called TWICE!

componentWillReceiveProps → render → componentDidUpdate
        ↓                      ↓              ↓
   Called 3 TIMES!         Finally done!   Called ONCE
```

### Real-World Bug Example

```jsx
// ❌ This code breaks with Suspense!
class MyComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    // This might run 3 times for ONE update!
    api.trackPageView(nextProps.page); // Sends 3 API calls instead of 1!

    this.setState({ loading: true }); // Causes inconsistent state!
  }
}
```

### The Render Phase vs Commit Phase

```
[RENDER PHASE]                    [COMMIT PHASE]
Can be interrupted/restarted      Runs exactly once
─────────────────────────────────┬──────────────────────
                                 │
componentWillReceiveProps ❌      │  componentDidUpdate ✅
componentWillMount ❌             │  componentDidMount ✅
componentWillUpdate ❌            │
getDerivedStateFromProps ✅       │
render                           │
                                 │
← Suspense can pause here!       │→ Safe zone, no interruption
```

---

## ✅ Solution: Custom Rating Component

Since `react-stars` is unmaintained and incompatible with React 19, I created a custom Rating component

### Custom Rating Component

**File:** `app/common/Rating/Rating.tsx`

```tsx
"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface RatingProps {
  count?: number;
  value?: number;
  size?: number;
  color?: string;
  activeColor?: string;
  onChange?: (value: number) => void;
  readOnly?: boolean;
}

export default function Rating({
  count = 5,
  value = 0,
  size = 24,
  color = "#d1d5db",
  activeColor = "#fbbf24",
  onChange,
  readOnly = false,
}: RatingProps) {
  const [rating, setRating] = useState(value);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (readOnly) return;
    const newRating = index + 1;
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (readOnly) return;
    setHoverValue(index + 1);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverValue(null);
  };

  const stars = [];
  for (let i = 0; i < count; i++) {
    const isFilled = hoverValue !== null ? i < hoverValue : i < rating;
    stars.push(
      <FaStar
        key={i}
        size={size}
        color={isFilled ? activeColor : color}
        onClick={() => handleClick(i)}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: readOnly ? "default" : "pointer", transition: "color 0.2s" }}
      />
    );
  }

  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
}
```

### Usage Examples

```tsx
import Rating from "@/common/Rating/Rating";

// Interactive rating (user can click to rate)
<Rating
  count={5}
  value={3}
  size={24}
  onChange={(newValue) => console.log(newValue)}
/>

// Read-only rating (display only)
<Rating
  count={5}
  value={4.5}
  size={20}
  readOnly={true}
/>

// Custom colors
<Rating
  count={5}
  value={3}
  color="#e0e0e0"
  activeColor="#ff6b6b"
/>
```

## 📖 Key Lessons Learned

1. **Always check library compatibility** before upgrading React major versions
2. **Deprecated doesn't mean removed** - until it does (React 19)
3. **Class components with legacy lifecycles** will break in React 19
4. **Function components with hooks** are the future-proof approach
5. **Custom components** can be more maintainable than unmaintained libraries

---

## 🔗 Related Resources

- [React 19 Release Notes](https://react.dev/blog/2024/12/05/react-19)
- [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [Hooks API Reference](https://react.dev/reference/react)
- [react-icons Documentation](https://react-icons.github.io/react-icons/)

---

## 📅 Document Info

- **Created:** November 26, 2025
- **Project:** nextjs-restaurant
- **React Version:** 19.2.0
- **Next.js Version:** 16.0.4
