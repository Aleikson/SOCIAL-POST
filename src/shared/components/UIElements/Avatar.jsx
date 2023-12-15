import styled from 'styled-components';

const AvatarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AvatarImage = styled.img`
  display: block;
  border-radius: 50%;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  object-fit: cover;
`;

const Avatar = (props) => {
  return (
    <AvatarContainer
      className={`avatar ${props.className}`}
      style={props.style}
    >
      <AvatarImage
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.height }}
      />
    </AvatarContainer>
  );
};

export default Avatar;
