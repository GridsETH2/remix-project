import { createContext } from 'react'
import { BrowserState } from '../reducers/workspace'

export const FileSystemContext = createContext<{
  fs: BrowserState,
  modal:(title: string, message: string | JSX.Element, okLabel: string, okFn: () => void, cancelLabel?: string, cancelFn?: () => void) => void,
  dispatchInitWorkspace:() => Promise<void>,
  dispatchFetchDirectory:(path: string) => Promise<void>,
  dispatchAddInputField:(path: string, type: 'file' | 'folder') => Promise<void>,
  dispatchRemoveInputField:(path: string) => Promise<void>,
  dispatchCreateWorkspace: (workspaceName: string) => Promise<void>,
  toast: (toasterMsg: string) => void,
  dispatchFetchWorkspaceDirectory: (path: string) => void,
  dispatchSwitchToWorkspace: (name: string) => void
    }>(null)