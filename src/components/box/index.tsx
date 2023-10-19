import { Box as NBBox, IBoxProps } from 'native-base'

type Props = IBoxProps

export function Box (props: Props) {
  return (
    <NBBox
      bg={'gray.200'}
      borderRadius={'3xl'}
      {...props}
    />
  );
}
