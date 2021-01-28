import { PlanetCollection } from '../PlanetCollection';
import CircularProgress from '@material-ui/core/CircularProgress';
import { usePlanetCollection } from "../usePlanetCollection";
import { PlanetCard } from '../../../components/PlanetCard/PlanetCard';

// import { findByTestAttr } from '../../../utils/testUtils/findByTestAttr';
import { shallow} from "enzyme";
import { mocks } from "../../../utils/mocks/mocks";

jest.mock('../usePlanetCollection', () => ({
        usePlanetCollection: jest.fn()
    })
);

describe('component test', () => {
    it('planets is not loaded', () => {

        // @ts-ignore
        usePlanetCollection.mockImplementation(() => ({
            isPlanetsLoaded: false,
            planets: [],
            loadPlanetCollection: () => {},
            isNewPlanetsLoaded: false,
          })
        );

        const container = shallow(<PlanetCollection />);

        expect(container.find(CircularProgress)).toHaveLength(2);
        expect(container.find(PlanetCard)).toHaveLength(0);

    });

    it('planets is not loaded', () => {
        // @ts-ignore
        usePlanetCollection.mockImplementation(() => ({
                isPlanetsLoaded: true,
                planets: mocks.planetCollectionMock,
                loadPlanetCollection: () => {},
                isNewPlanetsLoaded: true,
            })
        );

        const container = shallow(<PlanetCollection />);

        expect(container.find(CircularProgress)).toHaveLength(0);
        expect(container.find(PlanetCard)).toHaveLength(1);

    })
})


//TODO Create object in the top of file that reflect usePlanetCollection, check factory param on invoking,
