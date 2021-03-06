/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
    handleVisibilityChange: function (component, event, helper) {
        if (component.get("v.visible")) {
            var popupTarget = component.find("popupTarget");
            if (popupTarget.isRendered()) {
                helper.position(component);
            }
        } else {
            helper.unposition(component);
        }
    },
    handleKeyboardEvent: function (component, event, helper) {
        var _helper = component.getConcreteComponent().getDef().getHelper() || helper;
        _helper.handleKeyboardEvent(component.getConcreteComponent(), event);
    }
})// eslint-disable-line semi