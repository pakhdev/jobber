// To parse this data:
//
//   import { Convert } from "./file";
//
//   const indeedJobsList = Convert.toIndeedJobsList(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface IndeedJobsList {
    appliedOrGreater: boolean;
    company: string;
    companyBrandingAttributes: CompanyBrandingAttributes;
    companyIdEncrypted: string;
    companyRating: number;
    companyReviewCount: number;
    d2iEnabled: boolean;
    displayTitle: string;
    dradisJob: boolean;
    employerAssistEnabled: boolean;
    employerResponsive: boolean;
    encryptedFccompanyId: string;
    encryptedResultData: EncryptedResultData;
    expired: boolean;
    extractTrackingUrls: string;
    extractedSalary?: ExtractedSalary;
    fccompanyId: number;
    featuredCompanyAttributes: FeaturedCompanyAttributes;
    featuredEmployer: boolean;
    featuredEmployerCandidate: boolean;
    feedId: number;
    formattedLocation: string;
    formattedRelativeTime: string;
    hideMetaData: boolean;
    hideSave: boolean;
    highVolumeHiringModel: HighVolumeHiringModel;
    highlyRatedEmployer: boolean;
    hiringEventJob: boolean;
    hiringMultipleCandidatesModel?: HiringMultipleCandidatesModel;
    indeedApplyEnabled: boolean;
    indeedApplyResumeType?: string;
    indeedApplyable: boolean;
    isJobVisited: boolean;
    isMobileThirdPartyApplyable: boolean;
    isNoResumeJob: boolean;
    isSubsidiaryJob: boolean;
    jobCardRequirementsModel: JobCardRequirementsModel;
    jobLocationCity: string;
    jobLocationPostal?: string;
    jobLocationState?: string;
    jobTypes: JobType[];
    jobkey: string;
    jsiEnabled: boolean;
    link: string;
    locationCount: number;
    loceJobTagModel?: LoceJobTagModel;
    mobtk: Mobtk;
    moreLinks?: MoreLinks;
    moreLocUrl: string;
    mouseDownHandlerOption: MouseDownHandlerOption;
    newJob: boolean;
    normTitle: string;
    openInterviewsInterviewsOnTheSpot: boolean;
    openInterviewsJob: boolean;
    openInterviewsOffersOnTheSpot: boolean;
    openInterviewsPhoneJob: boolean;
    overrideIndeedApplyText: boolean;
    preciseLocationModel: PreciseLocationModel;
    pubDate: number;
    redirectToThirdPartySite: boolean;
    remoteLocation: boolean;
    resumeMatch: boolean;
    salarySnippet: SalarySnippet;
    saved: boolean;
    savedApplication: boolean;
    screenerQuestionsURL: string;
    showAttainabilityBadge: boolean;
    showCommutePromo: boolean;
    showEarlyApply: boolean;
    showJobType: boolean;
    showRelativeDate: boolean;
    showSponsoredLabel: boolean;
    showStrongerAppliedLabel: boolean;
    smartFillEnabled: boolean;
    smbD2iEnabled: boolean;
    snippet: string;
    sourceId: number;
    sponsored: boolean;
    taxoAttributes: string[];
    taxoAttributesDisplayLimit: number;
    taxoLogAttributes: string[];
    taxonomyAttributes: TaxonomyAttribute[];
    tier: Tier;
    title: string;
    translatedAttributes: any[];
    translatedCmiJobTags: string[];
    truncatedCompany: string;
    urgentlyHiring: boolean;
    viewJobLink: string;
    vjFeaturedEmployerCandidate: boolean;
    workplaceInsights: any[];
    companyOverviewLink?: string;
    companyOverviewLinkCampaignId?: string;
    companyReviewLink?: string;
    companyReviewLinkCampaignId?: string;
    remoteWorkModel?: RemoteWorkModel;
    adBlob?: string;
    adId?: string;
    advn?: Advn;
}

export enum Advn {
    Empty = '',
    The4459387372488546 = '4459387372488546',
}

export interface CompanyBrandingAttributes {
    logoUrl?: string;
    headerImageUrl?: string;
}

export enum EncryptedResultData {
    VwIPTVJ1CTn5AN7QTSqGRXGNe2WB2UYx73QSczFnGU = 'VwIPTVJ1cTn5AN7Q-tSqGRXGNe2wB2UYx73qSczFnGU',
}

export interface ExtractedSalary {
    max: number;
    min: number;
    type: string;
}

export interface FeaturedCompanyAttributes {
    logoUrl?: string;
}

export interface HighVolumeHiringModel {
    highVolumeHiring: boolean;
}

export interface HiringMultipleCandidatesModel {
    hiresNeeded: string;
    hiresNeededExact: string;
}

export interface JobCardRequirementsModel {
    additionalRequirementsCount: number;
    requirementsHeaderShown: boolean;
}

export enum JobType {
    Indefinido = 'Indefinido',
    JornadaCompleta = 'Jornada completa',
    Temporal = 'Temporal',
}

export interface LoceJobTagModel {
}

export enum Mobtk {
    The1Grsubgoaj6F9800 = '1grsubgoaj6f9800',
}

export interface MoreLinks {
    companyName: string;
    companyText: string;
    locationName: string;
    resultNumber: number;
    salaryLocationName?: string;
    salaryNoFollowLink: boolean;
    salaryUrl: string;
    salaryUrlParams: string;
    shortLocationName: string;
    showAcmeLink: boolean;
    showAcmeQnaLink: boolean;
    showViewAllCompanyAndLocationLinks: boolean;
    showViewAllCompanyLink: boolean;
    showViewAllLocationLink: boolean;
    showViewAllNormalizedTitleLink: boolean;
    viewAllCompanyLinkText: string;
    viewAllCompanyUrl: string;
    viewAllLocationUrl: string;
    viewAllNormalizedTitleLink?: string;
    viewAllNormalizedTitleLinkText?: string;
    visible: boolean;
    qnaUrl?: string;
    qnaUrlParams?: string;
}

export interface MouseDownHandlerOption {
    adId: number | string;
    advn: Advn;
    extractTrackingUrls: string[];
    from: From;
    jobKey: string;
    link: string;
    tk: Mobtk;
}

export enum From {
    Vjs = 'vjs',
}

export interface PreciseLocationModel {
    obfuscateLocation: boolean;
    overrideJCMPreciseLocationModel: boolean;
}

export interface RemoteWorkModel {
    inlineText: boolean;
    type: RemoteWorkModelType;
}

export enum RemoteWorkModelType {
    RemoteAlways = 'REMOTE_ALWAYS',
    RemoteHybrid = 'REMOTE_HYBRID',
}

export interface SalarySnippet {
    currency: Currency;
    salaryTextFormatted: boolean;
    source?: string;
    text?: string;
}

export enum Currency {
    Empty = '',
    Eur = 'EUR',
    Usd = 'USD',
}

export interface TaxonomyAttribute {
    attributes: Attribute[];
    label: Label;
}

export interface Attribute {
    label: string;
    suid: string;
}

export enum Label {
    Benefits = 'benefits',
    JobTypes = 'job-types',
    JobTypesCc = 'job-types-cc',
    Remote = 'remote',
    Schedules = 'schedules',
    Shifts = 'shifts',
}

export interface Tier {
    matchedPreferences: MatchedPreferences;
    type: TierType;
}

export interface MatchedPreferences {
    longMatchedPreferences: any[];
    stringMatchedPreferences: any[];
}

export enum TierType {
    Default = 'DEFAULT',
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toIndeedJobsList(json: string): IndeedJobsList[] {
        return cast(JSON.parse(json), a(r('IndeedJobsList')));
    }

    public static indeedJobsListToJson(value: IndeedJobsList[]): string {
        return JSON.stringify(uncast(value, a(r('IndeedJobsList'))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${ parent }` : '';
    const keyText = key ? ` for key "${ key }"` : '';
    throw Error(`Invalid value${ keyText }${ parentText }. Expected ${ prettyTyp } but got ${ JSON.stringify(val) }`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${ prettyTypeName(typ[1]) }`;
        } else {
            return `one of [${ typ.map(a => {
                return prettyTypeName(a);
            }).join(', ') }]`;
        }
    } else if (typeof typ === 'object' && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {
            }
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => {
            return l(a);
        }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l('array'), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l('Date'), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== 'object' || Array.isArray(val)) {
            return invalidValue(l(ref || 'object'), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === 'any') return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === 'object' && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === 'object') {
        return typ.hasOwnProperty('unionMembers') ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty('arrayItems') ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty('props') ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== 'number') return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    'IndeedJobsList': o([
        { json: 'appliedOrGreater', js: 'appliedOrGreater', typ: true },
        { json: 'company', js: 'company', typ: '' },
        { json: 'companyBrandingAttributes', js: 'companyBrandingAttributes', typ: r('CompanyBrandingAttributes') },
        { json: 'companyIdEncrypted', js: 'companyIdEncrypted', typ: '' },
        { json: 'companyRating', js: 'companyRating', typ: 3.14 },
        { json: 'companyReviewCount', js: 'companyReviewCount', typ: 0 },
        { json: 'd2iEnabled', js: 'd2iEnabled', typ: true },
        { json: 'displayTitle', js: 'displayTitle', typ: '' },
        { json: 'dradisJob', js: 'dradisJob', typ: true },
        { json: 'employerAssistEnabled', js: 'employerAssistEnabled', typ: true },
        { json: 'employerResponsive', js: 'employerResponsive', typ: true },
        { json: 'encryptedFccompanyId', js: 'encryptedFccompanyId', typ: '' },
        { json: 'encryptedResultData', js: 'encryptedResultData', typ: r('EncryptedResultData') },
        { json: 'expired', js: 'expired', typ: true },
        { json: 'extractTrackingUrls', js: 'extractTrackingUrls', typ: '' },
        { json: 'extractedSalary', js: 'extractedSalary', typ: u(undefined, r('ExtractedSalary')) },
        { json: 'fccompanyId', js: 'fccompanyId', typ: 0 },
        { json: 'featuredCompanyAttributes', js: 'featuredCompanyAttributes', typ: r('FeaturedCompanyAttributes') },
        { json: 'featuredEmployer', js: 'featuredEmployer', typ: true },
        { json: 'featuredEmployerCandidate', js: 'featuredEmployerCandidate', typ: true },
        { json: 'feedId', js: 'feedId', typ: 0 },
        { json: 'formattedLocation', js: 'formattedLocation', typ: '' },
        { json: 'formattedRelativeTime', js: 'formattedRelativeTime', typ: '' },
        { json: 'hideMetaData', js: 'hideMetaData', typ: true },
        { json: 'hideSave', js: 'hideSave', typ: true },
        { json: 'highVolumeHiringModel', js: 'highVolumeHiringModel', typ: r('HighVolumeHiringModel') },
        { json: 'highlyRatedEmployer', js: 'highlyRatedEmployer', typ: true },
        { json: 'hiringEventJob', js: 'hiringEventJob', typ: true },
        {
            json: 'hiringMultipleCandidatesModel',
            js: 'hiringMultipleCandidatesModel',
            typ: u(undefined, r('HiringMultipleCandidatesModel')),
        },
        { json: 'indeedApplyEnabled', js: 'indeedApplyEnabled', typ: true },
        { json: 'indeedApplyResumeType', js: 'indeedApplyResumeType', typ: u(undefined, '') },
        { json: 'indeedApplyable', js: 'indeedApplyable', typ: true },
        { json: 'isJobVisited', js: 'isJobVisited', typ: true },
        { json: 'isMobileThirdPartyApplyable', js: 'isMobileThirdPartyApplyable', typ: true },
        { json: 'isNoResumeJob', js: 'isNoResumeJob', typ: true },
        { json: 'isSubsidiaryJob', js: 'isSubsidiaryJob', typ: true },
        { json: 'jobCardRequirementsModel', js: 'jobCardRequirementsModel', typ: r('JobCardRequirementsModel') },
        { json: 'jobLocationCity', js: 'jobLocationCity', typ: '' },
        { json: 'jobLocationPostal', js: 'jobLocationPostal', typ: u(undefined, '') },
        { json: 'jobLocationState', js: 'jobLocationState', typ: u(undefined, '') },
        { json: 'jobTypes', js: 'jobTypes', typ: a(r('JobType')) },
        { json: 'jobkey', js: 'jobkey', typ: '' },
        { json: 'jsiEnabled', js: 'jsiEnabled', typ: true },
        { json: 'link', js: 'link', typ: '' },
        { json: 'locationCount', js: 'locationCount', typ: 0 },
        { json: 'loceJobTagModel', js: 'loceJobTagModel', typ: u(undefined, r('LoceJobTagModel')) },
        { json: 'mobtk', js: 'mobtk', typ: r('Mobtk') },
        { json: 'moreLinks', js: 'moreLinks', typ: u(undefined, r('MoreLinks')) },
        { json: 'moreLocUrl', js: 'moreLocUrl', typ: '' },
        { json: 'mouseDownHandlerOption', js: 'mouseDownHandlerOption', typ: r('MouseDownHandlerOption') },
        { json: 'newJob', js: 'newJob', typ: true },
        { json: 'normTitle', js: 'normTitle', typ: '' },
        { json: 'openInterviewsInterviewsOnTheSpot', js: 'openInterviewsInterviewsOnTheSpot', typ: true },
        { json: 'openInterviewsJob', js: 'openInterviewsJob', typ: true },
        { json: 'openInterviewsOffersOnTheSpot', js: 'openInterviewsOffersOnTheSpot', typ: true },
        { json: 'openInterviewsPhoneJob', js: 'openInterviewsPhoneJob', typ: true },
        { json: 'overrideIndeedApplyText', js: 'overrideIndeedApplyText', typ: true },
        { json: 'preciseLocationModel', js: 'preciseLocationModel', typ: r('PreciseLocationModel') },
        { json: 'pubDate', js: 'pubDate', typ: 0 },
        { json: 'redirectToThirdPartySite', js: 'redirectToThirdPartySite', typ: true },
        { json: 'remoteLocation', js: 'remoteLocation', typ: true },
        { json: 'resumeMatch', js: 'resumeMatch', typ: true },
        { json: 'salarySnippet', js: 'salarySnippet', typ: r('SalarySnippet') },
        { json: 'saved', js: 'saved', typ: true },
        { json: 'savedApplication', js: 'savedApplication', typ: true },
        { json: 'screenerQuestionsURL', js: 'screenerQuestionsURL', typ: '' },
        { json: 'showAttainabilityBadge', js: 'showAttainabilityBadge', typ: true },
        { json: 'showCommutePromo', js: 'showCommutePromo', typ: true },
        { json: 'showEarlyApply', js: 'showEarlyApply', typ: true },
        { json: 'showJobType', js: 'showJobType', typ: true },
        { json: 'showRelativeDate', js: 'showRelativeDate', typ: true },
        { json: 'showSponsoredLabel', js: 'showSponsoredLabel', typ: true },
        { json: 'showStrongerAppliedLabel', js: 'showStrongerAppliedLabel', typ: true },
        { json: 'smartFillEnabled', js: 'smartFillEnabled', typ: true },
        { json: 'smbD2iEnabled', js: 'smbD2iEnabled', typ: true },
        { json: 'snippet', js: 'snippet', typ: '' },
        { json: 'sourceId', js: 'sourceId', typ: 0 },
        { json: 'sponsored', js: 'sponsored', typ: true },
        { json: 'taxoAttributes', js: 'taxoAttributes', typ: a('') },
        { json: 'taxoAttributesDisplayLimit', js: 'taxoAttributesDisplayLimit', typ: 0 },
        { json: 'taxoLogAttributes', js: 'taxoLogAttributes', typ: a('') },
        { json: 'taxonomyAttributes', js: 'taxonomyAttributes', typ: a(r('TaxonomyAttribute')) },
        { json: 'tier', js: 'tier', typ: r('Tier') },
        { json: 'title', js: 'title', typ: '' },
        { json: 'translatedAttributes', js: 'translatedAttributes', typ: a('any') },
        { json: 'translatedCmiJobTags', js: 'translatedCmiJobTags', typ: a('') },
        { json: 'truncatedCompany', js: 'truncatedCompany', typ: '' },
        { json: 'urgentlyHiring', js: 'urgentlyHiring', typ: true },
        { json: 'viewJobLink', js: 'viewJobLink', typ: '' },
        { json: 'vjFeaturedEmployerCandidate', js: 'vjFeaturedEmployerCandidate', typ: true },
        { json: 'workplaceInsights', js: 'workplaceInsights', typ: a('any') },
        { json: 'companyOverviewLink', js: 'companyOverviewLink', typ: u(undefined, '') },
        { json: 'companyOverviewLinkCampaignId', js: 'companyOverviewLinkCampaignId', typ: u(undefined, '') },
        { json: 'companyReviewLink', js: 'companyReviewLink', typ: u(undefined, '') },
        { json: 'companyReviewLinkCampaignId', js: 'companyReviewLinkCampaignId', typ: u(undefined, '') },
        { json: 'remoteWorkModel', js: 'remoteWorkModel', typ: u(undefined, r('RemoteWorkModel')) },
        { json: 'adBlob', js: 'adBlob', typ: u(undefined, '') },
        { json: 'adId', js: 'adId', typ: u(undefined, '') },
        { json: 'advn', js: 'advn', typ: u(undefined, r('Advn')) },
    ], false),
    'CompanyBrandingAttributes': o([
        { json: 'logoUrl', js: 'logoUrl', typ: u(undefined, '') },
        { json: 'headerImageUrl', js: 'headerImageUrl', typ: u(undefined, '') },
    ], false),
    'ExtractedSalary': o([
        { json: 'max', js: 'max', typ: 0 },
        { json: 'min', js: 'min', typ: 0 },
        { json: 'type', js: 'type', typ: '' },
    ], false),
    'FeaturedCompanyAttributes': o([
        { json: 'logoUrl', js: 'logoUrl', typ: u(undefined, '') },
    ], false),
    'HighVolumeHiringModel': o([
        { json: 'highVolumeHiring', js: 'highVolumeHiring', typ: true },
    ], false),
    'HiringMultipleCandidatesModel': o([
        { json: 'hiresNeeded', js: 'hiresNeeded', typ: '' },
        { json: 'hiresNeededExact', js: 'hiresNeededExact', typ: '' },
    ], false),
    'JobCardRequirementsModel': o([
        { json: 'additionalRequirementsCount', js: 'additionalRequirementsCount', typ: 0 },
        { json: 'requirementsHeaderShown', js: 'requirementsHeaderShown', typ: true },
    ], false),
    'LoceJobTagModel': o([], false),
    'MoreLinks': o([
        { json: 'companyName', js: 'companyName', typ: '' },
        { json: 'companyText', js: 'companyText', typ: '' },
        { json: 'locationName', js: 'locationName', typ: '' },
        { json: 'resultNumber', js: 'resultNumber', typ: 0 },
        { json: 'salaryLocationName', js: 'salaryLocationName', typ: u(undefined, '') },
        { json: 'salaryNoFollowLink', js: 'salaryNoFollowLink', typ: true },
        { json: 'salaryUrl', js: 'salaryUrl', typ: '' },
        { json: 'salaryUrlParams', js: 'salaryUrlParams', typ: '' },
        { json: 'shortLocationName', js: 'shortLocationName', typ: '' },
        { json: 'showAcmeLink', js: 'showAcmeLink', typ: true },
        { json: 'showAcmeQnaLink', js: 'showAcmeQnaLink', typ: true },
        { json: 'showViewAllCompanyAndLocationLinks', js: 'showViewAllCompanyAndLocationLinks', typ: true },
        { json: 'showViewAllCompanyLink', js: 'showViewAllCompanyLink', typ: true },
        { json: 'showViewAllLocationLink', js: 'showViewAllLocationLink', typ: true },
        { json: 'showViewAllNormalizedTitleLink', js: 'showViewAllNormalizedTitleLink', typ: true },
        { json: 'viewAllCompanyLinkText', js: 'viewAllCompanyLinkText', typ: '' },
        { json: 'viewAllCompanyUrl', js: 'viewAllCompanyUrl', typ: '' },
        { json: 'viewAllLocationUrl', js: 'viewAllLocationUrl', typ: '' },
        { json: 'viewAllNormalizedTitleLink', js: 'viewAllNormalizedTitleLink', typ: u(undefined, '') },
        { json: 'viewAllNormalizedTitleLinkText', js: 'viewAllNormalizedTitleLinkText', typ: u(undefined, '') },
        { json: 'visible', js: 'visible', typ: true },
        { json: 'qnaUrl', js: 'qnaUrl', typ: u(undefined, '') },
        { json: 'qnaUrlParams', js: 'qnaUrlParams', typ: u(undefined, '') },
    ], false),
    'MouseDownHandlerOption': o([
        { json: 'adId', js: 'adId', typ: u(0, '') },
        { json: 'advn', js: 'advn', typ: r('Advn') },
        { json: 'extractTrackingUrls', js: 'extractTrackingUrls', typ: a('') },
        { json: 'from', js: 'from', typ: r('From') },
        { json: 'jobKey', js: 'jobKey', typ: '' },
        { json: 'link', js: 'link', typ: '' },
        { json: 'tk', js: 'tk', typ: r('Mobtk') },
    ], false),
    'PreciseLocationModel': o([
        { json: 'obfuscateLocation', js: 'obfuscateLocation', typ: true },
        { json: 'overrideJCMPreciseLocationModel', js: 'overrideJCMPreciseLocationModel', typ: true },
    ], false),
    'RemoteWorkModel': o([
        { json: 'inlineText', js: 'inlineText', typ: true },
        { json: 'type', js: 'type', typ: r('RemoteWorkModelType') },
    ], false),
    'SalarySnippet': o([
        { json: 'currency', js: 'currency', typ: r('Currency') },
        { json: 'salaryTextFormatted', js: 'salaryTextFormatted', typ: true },
        { json: 'source', js: 'source', typ: u(undefined, '') },
        { json: 'text', js: 'text', typ: u(undefined, '') },
    ], false),
    'TaxonomyAttribute': o([
        { json: 'attributes', js: 'attributes', typ: a(r('Attribute')) },
        { json: 'label', js: 'label', typ: r('Label') },
    ], false),
    'Attribute': o([
        { json: 'label', js: 'label', typ: '' },
        { json: 'suid', js: 'suid', typ: '' },
    ], false),
    'Tier': o([
        { json: 'matchedPreferences', js: 'matchedPreferences', typ: r('MatchedPreferences') },
        { json: 'type', js: 'type', typ: r('TierType') },
    ], false),
    'MatchedPreferences': o([
        { json: 'longMatchedPreferences', js: 'longMatchedPreferences', typ: a('any') },
        { json: 'stringMatchedPreferences', js: 'stringMatchedPreferences', typ: a('any') },
    ], false),
    'Advn': [
        '',
        '4459387372488546',
    ],
    'EncryptedResultData': [
        'VwIPTVJ1cTn5AN7Q-tSqGRXGNe2wB2UYx73qSczFnGU',
    ],
    'JobType': [
        'Indefinido',
        'Jornada completa',
        'Temporal',
    ],
    'Mobtk': [
        '1grsubgoaj6f9800',
    ],
    'From': [
        'vjs',
    ],
    'RemoteWorkModelType': [
        'REMOTE_ALWAYS',
        'REMOTE_HYBRID',
    ],
    'Currency': [
        '',
        'EUR',
        'USD',
    ],
    'Label': [
        'benefits',
        'job-types',
        'job-types-cc',
        'remote',
        'schedules',
        'shifts',
    ],
    'TierType': [
        'DEFAULT',
    ],
};
