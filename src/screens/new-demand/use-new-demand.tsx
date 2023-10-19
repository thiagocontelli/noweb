import { useToast } from "native-base"
import { ReactNode, createContext, useContext, useState } from "react"
import { ListItem } from "./mockData"

type NewDemandContextType = {
  projectType: ListItem | null
  onProjectTypeChange(projectType: ListItem): void
  urgency: ListItem | null
  onUrgencyChange(urgency: ListItem): void
  deadline: ListItem | null
  onDeadlineChange(deadline: ListItem): void
  need: ListItem | null
  onNeedChange(need: ListItem | null): void
  notificationTime: Date
  onNotificationTimeChange(notificationTime: Date): void
  send(): void
  isLoading: boolean
  showError: boolean
}

const NewDemandContext = createContext({} as NewDemandContextType)

function NewDemandContextProvider({ children }: { children: ReactNode }) {
  const toast = useToast()

  const [projectType, setProjectType] = useState<ListItem | null>(null)
  const [urgency, setUrgency] = useState<ListItem | null>(null)
  const [deadline, setDeadline] = useState<ListItem | null>(null)
  const [need, setNeed] = useState<ListItem | null>(null)
  const [notificationTime, setNotificationTime] = useState<Date>(new Date())
  const [isLoading, setIsLoading] = useState(false)
  const [showError, setShowError] = useState(false)

  function resetForm() {
    setShowError(false)
    setProjectType(null)
    setUrgency(null)
    setDeadline(null)
    setNotificationTime(new Date())
    setNeed(null)
  }

  function isFormValid() {
    let errorCount = 0

    if (!need) errorCount++
    if (!projectType) errorCount++
    if (!urgency) errorCount++
    if (!deadline) errorCount++

    if (errorCount > 0) {
      setShowError(true)
      return false
    }

    return true
  }

  async function send() {
    setIsLoading(true)

    if (!isFormValid()) {
      toast.show({ description: 'Insira todos os dados.', placement: 'top' })
      setIsLoading(false)
      return
    }

    await new Promise(resolve => setTimeout(resolve, 2000))

    toast.show({ description: 'Demanda enviada com sucesso!', placement: 'top' })

    resetForm()
    setIsLoading(false)
  }

  return (
    <NewDemandContext.Provider
      value={{
        onProjectTypeChange: setProjectType,
        projectType,
        deadline,
        onDeadlineChange: setDeadline,
        onUrgencyChange: setUrgency,
        urgency,
        need,
        onNeedChange: setNeed,
        notificationTime,
        onNotificationTimeChange: setNotificationTime,
        isLoading,
        send,
        showError
      }}
    >
      {children}
    </NewDemandContext.Provider>
  )
}

const useNewDemand = () => useContext(NewDemandContext)

export {
  NewDemandContextProvider,
  useNewDemand
}

