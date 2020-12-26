import React from 'react';
import styles from './styles';
import { SlideModal, SlideModalProps } from 'reactive';
import Tip from "./tip";

/**
 * 底部弹出的模态框, 高度由内容决定
 */
export default class BottomModal extends React.Component<SlideModalProps>{
    private slideModalx?: SlideModal<SlideModalProps> | null;
    public static Tip = Tip;
    /**
     *
     */
    constructor(props: SlideModalProps) {
        super(props);
    }
    open() {
        this.slideModalx?.open(undefined);
    }
    close() {
        this.slideModalx?.close();
    }
    render() {
        const { children, ...othersProps } = this.props;
        return <SlideModal<SlideModalProps>
            align="down"
            direction="up" 
            ref={ref => this.slideModalx = ref}
            styles={{
                container: {
                    ...styles.slideModalContainer,
                },
                content: styles.slideModalContent
            }}
            cancelable={true}
            {...othersProps}
        >
            {children}
        </SlideModal>;
    }

   
}