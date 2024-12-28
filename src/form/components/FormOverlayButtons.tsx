import Button from 'components/buttons/Button';
import LABELS from 'consts/labels';

interface IFormOverlayButtonsProps {
  setShowMessage: (x: boolean) => void;
  leaveForm: () => void;
}

export default function FormOverlayButtons(props: IFormOverlayButtonsProps) {
  const { setShowMessage, leaveForm } = props;

  return (
    <>
      <Button
        dataTestid="button-no"
        text={LABELS.buttons.no}
        onClick={() => setShowMessage(false)}
      />
      <Button
        dataTestid="button-yes"
        text={LABELS.buttons.yes}
        onClick={() => leaveForm()}
        bgDark
      />
    </>
  );
}
