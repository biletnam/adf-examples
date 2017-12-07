/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FormFieldModel, FormFieldTypes, FormFieldValidator } from 'ng2-activiti-form';

export class DemoFieldValidator implements FormFieldValidator {

    isSupported(field: FormFieldModel): boolean {
        return field && field.type === FormFieldTypes.TEXT;
    }

    validate(field: FormFieldModel): boolean {
        if (this.isSupported(field)) {
            if (field.value && field.value.toLowerCase() === 'admin') {
                field.validationSummary = 'Sorry, the value cannot be "admin".';
                return false;
            }
        }
        return true;
    }

}
