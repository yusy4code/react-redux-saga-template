// productSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axiosInstance from '../../config';
import { FETCH_PRODUCTS, fetchProductsSuccess, fetchProductsFailure } from '../actions/productActions';

function* fetchProductsSaga() {
  try {
    const response = yield call(axiosInstance.get, '/products');
    yield put(fetchProductsSuccess(response.data.products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export default function* productSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsSaga);
}
