import { Button } from "native-base";
import { useNewDemand } from "../use-new-demand";

export function Send () {
  const {
    isLoading,
    send
  } = useNewDemand()
  
  return (
    <Button mt={8} mb={150} isLoading={isLoading} onPress={send} borderRadius={'xl'}>
      Enviar
    </Button>
  );
}
