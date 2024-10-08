import { FormikConfig, FormikValues, useFormik } from 'formik';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import { useCallback, useEffect, useState } from 'react';
import { usePrevious } from 'react-use';

export const useFormikAutoSave = <TValues extends FormikValues>(
  params: FormikConfig<TValues>,
  debounceMs: number
) => {
  const formik = useFormik<TValues>(params);
  const [lastUpdated, setLastUpdated] = useState<Nullable<Date>>(null);

  const prevFormikValues = usePrevious<TValues>(formik.values);

  const debounceCallback = useCallback(() => {
    formik.validateForm().then((errors) => {
      if (isEmpty(errors)) {
        return formik.submitForm().then(() => {
          setLastUpdated(new Date());
        });
      }
    });
  }, [formik]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSubmit = useCallback(debounce(debounceCallback, debounceMs), [
    debounceMs,
    debounceCallback,
  ]);

  useEffect(() => {
    if (prevFormikValues && !isEqual(formik.values, prevFormikValues)) {
      debouncedSubmit();
    }
  }, [formik.values, prevFormikValues, params, debouncedSubmit]);

  return { formik, lastUpdated };
};
