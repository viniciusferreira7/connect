type ZodFormattedError = {
  _errors?: string[]
  [key: string]: unknown
}

export function formatResponseErrors(error: ZodFormattedError): {
  message: string
  issue: Record<string, string[]>
  description: string
} {
  const description: string[] = []
  const issue: Record<string, string[]> = {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function walk(obj: any, path: string[] = []) {
    if (obj?._errors?.length) {
      const field = path.join(' ') || 'form'
      obj._errors.forEach((err: string) => {
        description.push(`${field}: ${err}`)

        if (!issue[field]) {
          issue[field] = []
        }
        issue[field].push(err)
      })
    }

    for (const key of Object.keys(obj || {})) {
      if (key !== '_errors' && typeof obj[key] === 'object') {
        walk(obj[key], [...path, key])
      }
    }
  }

  walk(error)

  return {
    message: error?.message
      ? String(error?.message)
      : 'An unexpected error has occurred.',
    issue,
    description: description.length
      ? description.join('\n')
      : 'An unexpected error has occurred.',
  }
}
