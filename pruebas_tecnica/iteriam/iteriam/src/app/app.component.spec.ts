import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'iteriam'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('iteriam');
  });


  /*   it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.content span').textContent).toContain('iteriam app is running!');
    }); */

  describe('When the components inits', () => {
    it('createElements is called', () => {
      spyOn(component, 'createElements');
      component.ngOnInit();
      expect(component.createElements).toHaveBeenCalled();
    });
  });

  describe('onSearch', () => {
    describe('Searching by ID', () => {
      it('When search by an existing element, returns an array with that element', () => {
        component.idSearched = 
        component.searchId();

        expect(component.photos.length).toBe(1);
        expect(component.photos[0].id).toBe(parseInt(SEARCHED_PHOTO_ID));
      });
    });

    describe('Searching by Text', () => {
      it('When search by an existing element, returns an array with that element', () => {
        component.selectedSearch = "text"
        component.searchInput = SEARCHED_PHOTO_TEXT;
        component.onSearch();

        expect(component.photos.length).toBe(1);
        expect(component.photos[0].text).toBe(SEARCHED_PHOTO_TEXT);
      });
    });
  });


});
