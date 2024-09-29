import { ComponentType, FC, PropsWithChildren } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Overlay } from './Overlay.styled';

type ModalProps = {
  name: string;
};

export type WithModalProps = {
  close: () => void;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ name, children }) => {
  const [searchParams] = useSearchParams();
  const isOpened = searchParams.has(name);

  if (!isOpened) {
    return null;
  }

  return <Overlay>{children}</Overlay>;
};

export const withModal = <T extends WithModalProps = WithModalProps>(
  name: string,
  WrappedComponent: ComponentType<T>
) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithModal = (props: Omit<T, keyof WithModalProps>) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const isOpened = searchParams.has(name);

    const handleClose = () => {
      searchParams.delete(name);
      setSearchParams(searchParams);
    };

    if (!isOpened) {
      return null;
    }

    return (
      <Overlay>
        <WrappedComponent {...(props as T)} close={handleClose} />
      </Overlay>
    );
  };

  ComponentWithModal.displayName = `withModal(${displayName})`;

  return ComponentWithModal;
};
