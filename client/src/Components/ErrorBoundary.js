import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = { hasError: false, error: '' }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true, error }
  }
  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    //  logErrorToMyService(error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <h1>Something went wrong:{this.state.error.message}</h1>
    }
    return this.props.children
  }
}
export default ErrorBoundary
