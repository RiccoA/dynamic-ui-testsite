import { DynamicForm } from "@curo/dynamic-ui-components"
import { useCallback } from "react"
import { data } from "./data"

function App() {
  const onSubmit = useCallback((viewModel: any) => {
    console.log(viewModel)
  }, [])

  const onBackButton = useCallback(() => {}, [])

  return (
    <div>
      <DynamicForm
        requestModel={data}
        childForms={data.childForms}
        onSubmit={onSubmit}
        handleBack={onBackButton}
      />
    </div>
  )
}

export default App
