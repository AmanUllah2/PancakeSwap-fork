import { Modal } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const ConfirmSwapModalContainer = ({ children, handleDismiss }) => {
  const { t } = useTranslation()

  return (
    <Modal title={t('Confirm Swap')} headerBackground="gradientCardHeader" onDismiss={handleDismiss} style={{ background: '#070707' }}>
      {children}
    </Modal>
  )
}

export default ConfirmSwapModalContainer
