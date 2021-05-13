export default (name: string, options: Array<unknown>) => {
  return {
    validator: (value: unknown) => {
      if (options.includes(value)) {
        return true
      }

      console.warn(`The ${name} prop is invalid. Given value: ${value}. Available options: ${options.join(', ')}.`, this)

      return false
    }
  }
}
