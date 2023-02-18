import { Component } from 'react'

import NotFound from '@components/NotFound'

interface ErrorBoundaryProps {
  children?: any
}

interface ErrorBoundaryState {
  hasError: boolean
  errors?: string
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return <NotFound />
    }

    return children
  }
}

export default ErrorBoundary
