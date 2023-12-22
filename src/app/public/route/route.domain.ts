export enum ROUTE_TYPE {
  HOME = 'HOME', 
  STAND_ALONE = 'STAND_ALONE',
  NOTES = 'NOTES',
  DIRECTIVE_COMPOSITION = 'DIRECTIVE_COMPOSITION',
  IMAGE_DIRECTIVE = 'IMAGE_DIRECTIVE',
  ROUTE_UNWRAP_DEFAULT = 'ROUTE_UNWRAP_DEFAULT',
  AUTHORED_CODE = 'AUTHORED_CODE',
  IGNORED_LIST = 'IGNORED_LIST',
  RANGE_SELECTION_SUPPORT = 'RANGE_SELECTION_SUPPORT',
  CDK_LIST_BOX = 'CDK_LIST_BOX',
  ESBUILD = 'ESBUILD',
  LANGUAGE_SERVIVE_IMPROVEMENT = 'LANGUAGE_SERVIVE_IMPROVEMENT',
  DATE_PIPE = 'DATE_PIPE',
  FUNTIONAL_ROUTE_GUARDS = 'FUNTIONAL_ROUTE_GUARDS',
  BREAKING_CHANGE = 'BREAKING_CHANGE',
  DEPRECATIONS = 'DEPRECATIONS',
  DOCUMENTS = 'DOCUMENTS'
};

export const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/standalone', ROUTE_TYPE.STAND_ALONE],
  ['/directive', ROUTE_TYPE.DIRECTIVE_COMPOSITION],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/image-directive', ROUTE_TYPE.IMAGE_DIRECTIVE],
  ['/route-unwrap', ROUTE_TYPE.ROUTE_UNWRAP_DEFAULT],
  ['/authored-code', ROUTE_TYPE.AUTHORED_CODE],
  ['/ignored-list', ROUTE_TYPE.IGNORED_LIST],
  ['/range-selection-support', ROUTE_TYPE.RANGE_SELECTION_SUPPORT],
  ['/cdk-list-box', ROUTE_TYPE.CDK_LIST_BOX],
  ['/esbuild', ROUTE_TYPE.ESBUILD],
  ['/language-service-improvement', ROUTE_TYPE.LANGUAGE_SERVIVE_IMPROVEMENT],
  ['/date-pipe', ROUTE_TYPE.DATE_PIPE],
  ['/route-guard', ROUTE_TYPE.FUNTIONAL_ROUTE_GUARDS],
  ['/breaking-changes', ROUTE_TYPE.BREAKING_CHANGE],
  ['/deprecations', ROUTE_TYPE.DEPRECATIONS],
  ['/documents', ROUTE_TYPE.DOCUMENTS]
]);

export const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.HOME, 'Notes of Angular v17'],
  [ROUTE_TYPE.STAND_ALONE, 'Standalone Component'],
  [ROUTE_TYPE.DIRECTIVE_COMPOSITION, 'Directive Composition API'],
  [ROUTE_TYPE.IMAGE_DIRECTIVE, 'Image Directive'],
  [ROUTE_TYPE.ROUTE_UNWRAP_DEFAULT, 'Router Syntax Improvement'], 
  [ROUTE_TYPE.FUNTIONAL_ROUTE_GUARDS, 'Functional Router Guards'], 
  [ROUTE_TYPE.IGNORED_LIST, 'Debug with the Ignored List'], 
  [ROUTE_TYPE.RANGE_SELECTION_SUPPORT, 'Range Selection Support'], 
  [ROUTE_TYPE.CDK_LIST_BOX, 'Angular CDK 15 - List Box'], 
  [ROUTE_TYPE.ESBUILD, 'esbuild Supported on the ng build --watch (Experimental Feature)'],
  [ROUTE_TYPE.LANGUAGE_SERVIVE_IMPROVEMENT, 'Language Service Improvement'], 
  [ROUTE_TYPE.DATE_PIPE, 'Date Pipe'], 
  //[ROUTE_TYPE.FLOW_CONTROL, 'Built-in Control Flow (Developer Preview)'],
  //[ROUTE_TYPE.DEFERRABLE_VIEWS, 'Deferrable Views'],
  [ROUTE_TYPE.NOTES, 'Other Features'],
  [ROUTE_TYPE.BREAKING_CHANGE, 'Breaking Changes'],
  [ROUTE_TYPE.DEPRECATIONS, 'Deprecations'],
  [ROUTE_TYPE.DOCUMENTS, 'Official Documents']
]);

/*
<div class="sider-bar">
    <div class="tabs">
      <button [ngClass]="getRouteStyle('STAND_ALONE')"
        mat-button (click)="changeRoute('standalone')">
        Standalone Component
      </button>
      <button [ngClass]="getRouteStyle('DIRECTIVE_COMPOSITION')"
        mat-button (click)="changeRoute('directive')">
        Directive Composition API
      </button>
      <button [ngClass]="getRouteStyle('IMAGE_DIRECTIVE')"
        mat-button (click)="changeRoute('image-directive')">
        Image Directive
      </button>
      <button [ngClass]="getRouteStyle('ROUTE_UNWRAP_DEFAULT')"
        mat-button (click)="changeRoute('route-unwrap')">
        Router Syntax Improvement
      </button>
      <button [ngClass]="getRouteStyle('FUNTIONAL_ROUTE_GUARDS')"
        mat-button (click)="changeRoute('route-guard')">
        Functional Router Guards
      </button>
      <button [ngClass]="getRouteStyle('AUTHORED_CODE')"
        mat-button (click)="changeRoute('authored-code')">
        Debug with the Authored Code
      </button>
      <button [ngClass]="getRouteStyle('IGNORED_LIST')"
        mat-button (click)="changeRoute('ignored-list')">
        Debug with the Ignored List
      </button>
      <button [ngClass]="getRouteStyle('RANGE_SELECTION_SUPPORT')"
        mat-button (click)="changeRoute('range-selection-support')">
        Angular Material 15 - Range Selection Support
      </button>
      <button [ngClass]="getRouteStyle('CDK_LIST_BOX')"
        mat-button (click)="changeRoute('cdk-list-box')">
        Angular CDK 15 - List Box
      </button>
      <button [ngClass]="getRouteStyle('ESBUILD')"
        mat-button (click)="changeRoute('esbuild')">
        esbuild Supported on the ng build --watch (Experimental Feature)
      </button>
      <button [ngClass]="getRouteStyle('LANGUAGE_SERVIVE_IMPROVEMENT')"
        mat-button (click)="changeRoute('language-service-improvement')">
        Language Service Improvement
      </button>
      <button [ngClass]="getRouteStyle('DATE_PIPE')"
        mat-button (click)="changeRoute('date-pipe')">
        Date Pipe
      </button>
      <button [ngClass]="getRouteStyle('NOTES')"
        mat-button (click)="changeRoute('notes')">
        Notes
      </button>
      <div class="footer">
        <div>
          Copyright @ 2023,
          <a href="https://www.linkedin.com/in/jen-hsuan-hsieh-6a13347a/">Jen-hsuan Hsieh</a>
        </div>
        <div>
          Last updated at {{updateTime}}
        </div>
        <div><a href="of_alpha@hotmail.com">Contact me</a></div>
      </div>
    </div>
  </div>
  
*/