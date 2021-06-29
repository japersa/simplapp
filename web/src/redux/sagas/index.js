import { all, fork } from "redux-saga/effects";
import { watchLogin } from "./loginSaga";
import { watchForgotPassword } from "./forgotPasswordSaga";
import { watchResetPassword } from "./resetPasswordSaga";
import { watchCountry } from "./countrySaga";
import { watchDepartment } from "./departmentSaga";
import { watchCity } from "./citySaga";
import { watchRole } from "./roleSaga";
import { watchNeighborhood } from "./neighborhoodSaga";
import { watchCompany } from "./companySaga";
import { watchPermission } from "./permissionSaga";
import { watchUser } from "./userSaga";
import { watchPermissionRole } from "./permissionRoleSaga";

export function* rootSaga() {
  yield all([fork(watchLogin)]);
  yield all([fork(watchForgotPassword)]);
  yield all([fork(watchResetPassword)]);
  yield all([fork(watchCountry)]);
  yield all([fork(watchDepartment)]);
  yield all([fork(watchCity)]);
  yield all([fork(watchRole)]);
  yield all([fork(watchNeighborhood)]);
  yield all([fork(watchCompany)]);
  yield all([fork(watchPermission)]);
  yield all([fork(watchUser)]);
  yield all([fork(watchPermissionRole)]);
}
