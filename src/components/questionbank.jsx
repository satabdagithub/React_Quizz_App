const qBank = [
    {
        id: 1,
        question: " Which of the following is the correct usage of React.lazy() for code splitting in React?",
        options: ["const Component = React.lazy(() => import('./Component'))", "const Component = lazy(() => import('./Component'))", "const Component = React.lazy(import('./Component'))", "const Component = import.lazy('./Component')"],
        answer: "const Component = React.lazy(() => import('./Component'))",
    },
    {
        id: 2,
        question: "In React, what is the primary reason for using useMemo and useCallback hooks?",
        options: ["To manage component state more efficiently", "To prevent unnecessary re-renders by memoizing values and functions", "To perform side effects", "To handle errors in components"],
        answer: "To prevent unnecessary re-renders by memoizing values and functions",
    },
    {
        id: 3,
        question: "Which method is used for handling errors in React components when using Error Boundaries?",
        options: ["componentError()", "componentWillCatch()", "static getDerivedStateFromError()", "componentDidCatch()"],
        answer: "componentDidCatch()",
    },
    {
        id: 4,
        question: "What is the primary difference between useEffect with an empty dependency array [] and componentDidMount in class components?",
        options: ["useEffect([]) runs only after the first render, while componentDidMount runs after every render", "useEffect([]) runs after the first render and on updates, while componentDidMount runs only once", "useEffect([]) runs after every render, while componentDidMount runs only once", "useEffect([]) and componentDidMount behave identically in all aspects"],
        answer: "useEffect([]) runs only after the first render, while componentDidMount runs after every render",
    },
    {
        id: 5,
        question: "How can you share state across multiple components in React without passing props directly to each component?",
        options: ["By using React.memo()", "By using the context API", "By using the useRef hook", "By using Redux middleware"],
        answer: "By using the context API",
    },
    {
        id: 6,
        question: "What is the purpose of React.memo()?",
        options: ["To optimize the performance of functional components by memoizing the result of a function", "To allow state updates in functional components", "To convert functional components into class components", "To memoize prop changes in class components"],
        answer: "To optimize the performance of functional components by memoizing the result of a function",
    },
    {
        id: 7,
        question: "Which lifecycle method is used in class components to fetch data before rendering?",
        options: ["componentDidUpdate", "componentDidMount", "render", "getDerivedStateFromProps"],
        answer: "componentDidMount",
    },
    {
        id: 8,
        question: "How can you prevent re-renders in a React functional component when props haven’t changed?",
        options: ["Using React.memo()", " Using shouldComponentUpdate()", "Using useMemo() hook", "Using useEffect() hook"],
        answer: "Using React.memo()",
    },
    {
        id: 9,
        question: "In React, what is the main difference between useState() and useReducer()?",
        options: ["useState() is used for managing component states, while useReducer() is used for managing side effects", "useState() is for simpler state logic, while useReducer() is used for complex state logic that involves multiple sub-values or actions", "useReducer() is only used in class components, while useState() is used in functional components", "useState() is asynchronous, while useReducer() is synchronous"],
        answer: "useState() is for simpler state logic, while useReducer() is used for complex state logic that involves multiple sub-values or actions",
    },
    {
        id: 10,
        question: "Which hook is used to subscribe to the context in React?",
        options: ["useState()", "useEffect()", "useContext()", "useRef()"],
        answer: "useContext()",
    },
    
        
    
]

export default qBank;
