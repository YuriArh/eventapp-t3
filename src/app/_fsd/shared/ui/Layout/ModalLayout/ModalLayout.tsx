import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  type ModalProps,
} from "@nextui-org/react";
import _ from "lodash";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

interface ModaLLayoutProps extends Omit<ModalProps, "children"> {
  children?: ReactNode;
  title: string;
}

export function ModalLayout(props: ModaLLayoutProps) {
  const { children, title } = props;
  const t = useTranslations("ModalBase");

  return (
    <Modal {..._.omit(props, "children")}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={onClose}>
                {t("Close")}
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
