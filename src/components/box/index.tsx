import { IBoxProps, Box as NBBox } from 'native-base';

type Props = IBoxProps

export function Box (props: Props) {
  return (
    <NBBox
      bg={'gray.200'}
      borderRadius={'3xl'}
      p={4}
      {...props}
    />
  );
}
