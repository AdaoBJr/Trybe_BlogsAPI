class StatusCode {
  constructor() {
    this.codes = {
      OK: '200',
      CREATED: '201',
      DELETED: '204',
      BAD_REQUEST: '400',
      UNAUTHORIZED: '401',
      FORBIDDEN: '403',
      NOT_FOUND: '404',
      CONFLICT: '409',
      SERVER_ERROR: '500',
    };
  }
}

module.exports = new StatusCode();