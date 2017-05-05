import { MDCGridListFoundation } from '@material/grid-list';

export default class MDCGridList extends MDCGridListFoundation {
    constructor(root) {
        super({
            getOffsetWidth: () => /* number */ 0,
            getNumberOfTiles:() => console.log('getNumberOfTiles'),
            getOffsetWidthForTileAtIndex: (/* index: number */) => /* number */ 0,
            setStyleForTilesElement: (/* property: string, value: string */) => {},
            registerResizeHandler: (/* handler: EventListener */) => {},
            deregisterResizeHandler: (/* handler: EventListener */) => {},
        });
    }
}
