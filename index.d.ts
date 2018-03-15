export = PersonalityTraitInfo;

declare type Locale = 'en' | 'es' | 'ja' | 'ko';
declare type Version = 'v2' | 'v3';
declare type Format = 'plain' | 'html' | 'markdown';

declare class PersonalityTraitInfo {
  constructor(options?: { locale?: Locale, version?: Version, format?: Format });

  description(traitId: string): string;

  descriptions(): string[];

  name(traitId: string): string;

  names(): string[];

  info(traitId: string): {
    id: string,
    name: string,
    description: string
  };
}
