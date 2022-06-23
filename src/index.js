import ReactDOM from 'react-dom';
import HeaderLayout from './components/HeaderLayout';

const widget = document.querySelectorAll('.root');
widget.forEach(div => {
        ReactDOM.render(
            <>
                <HeaderLayout domData={div} />
            </>
            , div
        )
    }
);