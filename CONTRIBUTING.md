# Contributing to NeuroPlanix

Thank you for your interest in contributing to NeuroPlanix! We appreciate your help in making this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Submitting Changes](#submitting-changes)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiringcommunity for all. Please read and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Getting Started

### 1. Fork the Repository

```bash
# Click "Fork" button on GitHub
```

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/neuroplanix.git
cd neuroplanix
```

### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/original-owner/neuroplanix.git
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

---

## Development Setup

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Setup Frontend

```bash
cd frontend

# Install dependencies
npm ci

# Start development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```

### Environment Variables

Create `.env.local` in the `frontend` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api

# Feature Flags
VITE_ENABLE_ANALYTICS=true
```

---

## Making Changes

### 1. Keep Your Branch Updated

```bash
git fetch upstream
git rebase upstream/main
```

### 2. Make Your Changes

- Create focused commits
- Keep changes atomic (one thing per commit)
- Test your changes thoroughly

### 3. Run Quality Checks

```bash
cd frontend

# Lint check
npm run lint

# Build check
npm run build

# All checks
npm run lint && npm run build
```

---

## Submitting Changes

### 1. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 2. Create a Pull Request

- Go to the original repository
- Click "New Pull Request"
- Select your branch
- Fill out the PR template completely
- Submit for review

### 3. Respond to Feedback

- Address reviewer comments
- Push additional commits if needed
- Do not force push once PR is under review

---

## Coding Standards

### JavaScript/React

```javascript
// ✅ Good
function UserProfile({ name, email }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="profile">
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

export default UserProfile;
```

```javascript
// ❌ Avoid
const UserProfile=(props)=>{
  const [x,setX]=useState(false);
  return <div><h1>{props.n}</h1></div>;
}
```

### React Best Practices

- Use functional components with hooks
- Use meaningful variable names
- Extract reusable components
- Keep components small and focused
- Use PropTypes or TypeScript for prop validation
- Add JSDoc comments for complex logic

### CSS/Tailwind

```jsx
// ✅ Good
<div className="flex items-center justify-between gap-4 px-6 py-4">
  <span className="text-lg font-semibold text-gray-800">Title</span>
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
    Action
  </button>
</div>

// ❌ Avoid
<div style={{display:'flex',gap:'20px',padding:'20px'}}>
```

---

## Commit Messages

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test additions/fixes
- `chore`: Maintenance tasks

### Scope

- `frontend`: Frontend-related changes
- `components`: Component changes
- `pages`: Page changes
- `styles`: Styling changes
- `deps`: Dependency changes

### Examples

```bash
git commit -m "feat(components): add dark mode toggle"
git commit -m "fix(pages): resolve dashboard layout issue on mobile"
git commit -m "docs: update installation instructions"
git commit -m "chore(deps): upgrade tailwindcss to v4"
```

---

## Pull Request Process

### Before Submitting

- [ ] Tests pass locally
- [ ] Code is linted
- [ ] No console errors or warnings
- [ ] Branch is up to date with main
- [ ] PR template is filled out completely

### PR Title Format

```
<type>: <description>

Examples:
- feat: add user authentication flow
- fix: resolve responsive design issues
- docs: update API documentation
```

### Description Template

```markdown
## Description
Brief description of changes

## Related Issues
Closes #123

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change

## Testing
How to test these changes

## Checklist
- [ ] Code follows style guide
- [ ] Tests added/updated
- [ ] Documentation updated
```

### Review Guidelines

Reviewers will check:

- ✅ Code quality and style
- ✅ Test coverage
- ✅ Performance impact
- ✅ Security concerns
- ✅ Documentation updates
- ✅ Browser compatibility

### After Approval

- [ ] Address any remaining comments
- [ ] Get approval from at least one maintainer
- [ ] Ensure CI/CD passes
- [ ] Squash commits if requested
- [ ] Merge when ready

---

## Reporting Bugs

### Use the Bug Report Template

When reporting bugs, please use the issue template:

1. Go to Issues → New Issue
2. Select "Bug Report"
3. Fill out all fields completely
4. Include:
   - Clear reproduction steps
   - Expected vs actual behavior
   - Browser/OS information
   - Screenshots if applicable

---

## Requesting Features

### Use the Feature Request Template

1. Go to Issues → New Issue
2. Select "Feature Request"
3. Describe:
   - Use case and motivation
   - Proposed solution
   - Alternatives considered
   - Acceptance criteria

---

## Code Review Checklist

As a reviewer, check:

- [ ] Code is readable and well-organized
- [ ] Changes follow the project standards
- [ ] No unnecessary dependencies added
- [ ] Tests are adequate
- [ ] Performance implications considered
- [ ] Security concerns addressed
- [ ] Documentation is updated

---

## Questions or Need Help?

- 💬 Check existing issues and discussions
- 📧 Contact maintainers
- 📖 Read documentation
- 🐦 Follow project on social media

---

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation

---

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

---

**Thank you for contributing to NeuroPlanix! 🎉**

Last Updated: February 10, 2026
