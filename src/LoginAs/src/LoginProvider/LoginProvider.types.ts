interface LoginProviderProps {
  handleLoadingDisplay?: boolean;
}

interface DevModeStateContextShape {
  userName: string;
  loading: boolean;
}

export { LoginProviderProps, DevModeStateContextShape };
