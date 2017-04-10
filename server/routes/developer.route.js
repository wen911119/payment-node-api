import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../../config/param-validation';
import developerCtrl from '../controllers/developer.controller';
import config from '../../config/config';

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/register')
  .post(validate(paramValidation.developerRegister), developerCtrl.register);

router.route('/useSuperRedeemCode')
  .post(validate(paramValidation.useSuperRedeemCode),expressJwt({ secret: config.jwtSecret }), developerCtrl.useSuperRedeemCode);

router.route('/genNormalRedeemCode')
  .post(validate(paramValidation.genNormalRedeemCode),expressJwt({ secret: config.jwtSecret }), developerCtrl.genNormalRedeemCode);

router.route('/getAllFreshRedeemCodeByAppId')
  .post(validate(paramValidation.getAllFreshRedeemCodeByAppId),expressJwt({ secret: config.jwtSecret }), developerCtrl.getAllFreshRedeemCodeByAppId);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */


export default router;
