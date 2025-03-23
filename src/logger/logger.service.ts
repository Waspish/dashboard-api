import { Logger, ILogObj } from 'tslog';

export class LoggerService {
	private logger: Logger<ILogObj>;

	constructor() {
		const loggerTemplate =
			'{{yyyy}}-{{mm}}-{{dd}} {{hh}}:{{MM}}:{{ss}} {{logLevelName}}: ';
		this.logger = new Logger({
			prettyLogTemplate: loggerTemplate
		});
	}
	log(...args: unknown[]) {
		this.logger.info(...args);
	}

	error(...args: unknown[]) {
		// отправка в sentry
		this.logger.error(...args);
	}

	warn(...args: unknown[]) {
		this.logger.warn(...args);
	}
}
