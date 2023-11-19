import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDeviceStore } from '../state/deviceState'; // Import your Zustand store

const DeviceScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { deviceData, setDeviceData } = useDeviceStore();

  const { deviceId } = route.params;

  useEffect(() => {
    const fetchDeviceData = async () => {
      const data = await fetchDevice(deviceId);
      setDeviceData(data);
    };

    fetchDeviceData();
  }, [deviceId]);


  return (
    <View>
      {/* Render the device information */}
      <Text>{deviceData.name}</Text>
      <Image source={{ uri: deviceData.image }} />
      <Text>{deviceData.description}</Text>

      {/* Add a button to edit the device */}
      <TouchableOpacity onPress={() => navigation.navigate('EditDeviceScreen', { deviceId })}>
        <Text>Edit Device</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeviceScreen;
