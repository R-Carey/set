export interface ProjectData {
  id: string;
  title: string;
  devices: DeviceData[];
}

export interface DeviceData {
  id: string;
  name: string;
  description: string;
  audioPath: string;
}
