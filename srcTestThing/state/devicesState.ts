import create from 'zustand';

type Device = {
  id: string;
  title: string;
  notes: string;
  order: number;
  // Add other properties as needed
};

type DevicesState = {
  devices: Device[];
  addDevice: (device: Device) => void;
  updateDevice: (device: Device) => void;
  removeDevice: (id: string) => void;
};

const useDevicesStore = create<DevicesState>((set) => ({
  devices: [],
  addDevice: (device) =>
    set((state) => ({ devices: [...state.devices, device] })),
  updateDevice: (device) =>
    set((state) => ({
      devices: state.devices.map((d) =>
        d.id === device.id ? device : d
      ),
    })),
  removeDevice: (id) =>
    set((state) => ({
      devices: state.devices.filter((d) => d.id !== id),
    })),
}));

export default useDevicesStore;
