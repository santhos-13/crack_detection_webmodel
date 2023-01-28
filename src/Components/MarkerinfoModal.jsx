import { Modal,ModalContent,ModalOverlay,ModalCloseButton,ModalBody,ModalHeader,Image } from "@chakra-ui/react";

const MarkerinfoModal = ({ isOpen, onClose, details }) => {
  return (
  <>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader mb={"-0.5"}>Crack detection:</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Image w="100%" h="80%" borderRadius="10% 10% 1px 1px" zIndex={"-1"} src={details.imagesrc} border="1px solid #2f3849" 
                
          />
                <p>Prediction : {details.text}</p>
                {/* <p>src:{details.imagesrc}</p> */}
            </ModalBody>
        </ModalContent>
        
      
    </Modal>
  </>
  );
}

export default MarkerinfoModal;