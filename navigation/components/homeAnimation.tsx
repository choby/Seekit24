import { AnimatedLottieViewProps } from "@/components/animations/animationBase";
import ReturnTop from "@/components/animations/ReturnTop";
import { inject } from "@/stores";
import NavigationState from "@/stores/navigation";
import { reaction } from "mobx";
import { observer } from "mobx-react";

type HomeAnimationProps = AnimatedLottieViewProps & { navigationState?: NavigationState; };

@inject("navigationState")
@observer
export default class extends ReturnTop<HomeAnimationProps>{

    constructor(props: HomeAnimationProps) {
        super(props);
        reaction(
            () => props.navigationState?.homeFocusTabName,
            tabName => {
                if (!tabName) return;
                const isTop = props.navigationState?.homePagePositions?.[tabName] ?? true;
                if (isTop) {
                    this.lottieView.current?.reset();
                }
                else {
                    this.lottieView.current?.play(20, 20);
                }
            }
        );
    }
    componentDidMount() {
        const { navigationState } = this.props;
        if (navigationState?.homePagePositions[navigationState.homeFocusTabName] === false)
            this.lottieView.current?.play(20, 20);

    }

}