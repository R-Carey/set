import { create, StoreApi } from 'zustand';
import { DeviceData } from '../types/types';

interface DeviceState {
  devices: DeviceData[];
  addDevice: (device: DeviceData) => void;
  removeDevice: (id: string) => void;
}

const useDeviceStore = create<DeviceState>((set: StoreApi<DeviceState>['setState']) => ({
  devices: [], // Initialize the devices array
  addDevice: (device: DeviceData) => set((prevState) => ({ devices: [...prevState.devices, device] })),
  removeDevice: (id: string) => set((prevState) => ({ devices: prevState.devices.filter((device) => device.id !== id) })),
}));

export default useDeviceStore;
