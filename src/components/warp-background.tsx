import { Warp, type WarpProps } from '@paper-design/shaders-react';

export default function WarpBackground(props: WarpProps) {
    
    const defaultProps = {
        speed: 0.2,
        rotation: 0.8,
        style: { width: '100%', height: '100%' }
    };

    return <Warp {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style }} />;

}