import { createConsoleReporter, defineDiagnostics } from 'nostics'
import { createDevReporter } from 'nostics/reporters/dev'

export const diagnostics = /*#__PURE__*/ defineDiagnostics({
  docsBase: code => `https://github.com/antfu/ghfs/blob/main/docs/errors/${code.toLowerCase()}.md`,
  codes: {
    // UI errors (E0900–E0949)
    GHFS0900: {
      why: (p: { detail: string }) => `saveUiState failed: ${p.detail}`,
    },
    GHFS0901: {
      why: (p: { shortcut: string, detail: string }) => `shortcut ${p.shortcut} failed: ${p.detail}`,
    },

    // UI warnings (W0950–W0999)
    GHFS0950: {
      why: (p: { detail: string }) => `uiState hydrate skipped: ${p.detail}`,
    },
  },
  reporters: [/*#__PURE__*/ createConsoleReporter({ method: 'error' }), /*#__PURE__*/ createDevReporter()],
})
