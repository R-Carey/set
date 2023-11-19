import { create, StoreApi } from 'zustand';
import { ProjectData } from '../types/types';

interface ProjectState {
  projectData: ProjectData | null; // Update the type to allow null
  setProjectData: (data: ProjectData) => void;
  removeProject: () => void;
}

const useProjectStore = create<ProjectState>((set: StoreApi<ProjectState>['setState']) => ({
  projectData: null, // Initialize with null
  setProjectData: (data: ProjectData) => set(() => ({ projectData: data })),
  removeProject: () => set(() => ({ projectData: null })), // Implementation of removeProject
}));

export default useProjectStore;
