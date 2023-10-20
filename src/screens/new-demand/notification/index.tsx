import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { HStack, Text, VStack, useTheme } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-remix-icon';
import { Box } from '../../../components';
import { useNewDemand } from '../use-new-demand';

export function Notification() {
  const theme = useTheme()
  const {
    notificationTime,
    onNotificationTimeChange
  } = useNewDemand()
  const [show, setShow] = useState(false)

  const dateFormatter = new Intl.DateTimeFormat('default', { hour: 'numeric', minute: 'numeric', hour12: true })

  function onChange(_: DateTimePickerEvent, newDate: Date | undefined) {
    if (newDate) {
      onNotificationTimeChange(newDate)
      setShow(false)
    }
  }

  return (
    <VStack space={2}>
      <Text
        fontWeight={'medium'}
      >
        Notificações
      </Text>

      <HStack space={4}>
        <Box flex={1} borderRadius={'xl'}>
          <HStack alignItems={'center'} space={2}>
            <Icon name='notification-2-fill' color={theme.colors.gray[500]} />
            <Text fontWeight={'medium'}>{dateFormatter.format(notificationTime)}</Text>
          </HStack>
        </Box>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{
            backgroundColor: theme.colors.primary[50],
            borderRadius: theme.radii.xl,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16
          }}
        >
          <Icon name={'add-fill'} color={theme.colors.primary[600]} />
        </TouchableOpacity>
      </HStack>
      {show && (
        <DateTimePicker
          is24Hour={false}
          mode={'time'}
          value={notificationTime}
          onChange={onChange}
          accentColor={theme.colors.primary[600]}
        />
      )}
    </VStack>
  );
}
