const Controller = require('../core/base_controller');
const common = require('../common/common');

class LoginKeyController extends Controller {
  async index() {
    const ctx = this.ctx;
    const k = common.uuidv1();
    ctx.session.loginKey = k;
		this.success({ key: k });
  }
}

module.exports = LoginKeyController;