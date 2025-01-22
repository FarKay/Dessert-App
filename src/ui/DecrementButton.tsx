interface DecrementButtonProps {
  onClick: () => void;
}

function DecrementButton({ onClick }: DecrementButtonProps) {
  return (
    <div onClick={onClick} className="border py-2 px-1 rounded-full">
      <img src="assets/images/icon-decrement-quantity.svg" alt="-" />
    </div>
  );
}

export default DecrementButton;
