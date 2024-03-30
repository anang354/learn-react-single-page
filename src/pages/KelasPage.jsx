import FaqComponent from '../components/FaqComponent';
import KelasSection from './homepage/KelasSection';

function KelasPage(props) {
    return (
        <div>
            <KelasSection title='Semua Kelas' limit={0} />
            <FaqComponent />
        </div>
    );
}

export default KelasPage;
