// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { CoreSiteSchema } from '@services/sites';

/**
 * Database variables for CoreCourse service.
 */
export const COURSE_STATUS_TABLE = 'course_status';
export const SITE_SCHEMA: CoreSiteSchema = {
    name: 'CoreCourseProvider',
    version: 1,
    tables: [
        {
            name: COURSE_STATUS_TABLE,
            columns: [
                {
                    name: 'id',
                    type: 'INTEGER',
                    primaryKey: true,
                },
                {
                    name: 'status',
                    type: 'TEXT',
                    notNull: true,
                },
                {
                    name: 'previous',
                    type: 'TEXT',
                },
                {
                    name: 'updated',
                    type: 'INTEGER',
                },
                {
                    name: 'downloadTime',
                    type: 'INTEGER',
                },
                {
                    name: 'previousDownloadTime',
                    type: 'INTEGER',
                },
            ],
        },
    ],
};

/**
 * Database variables for CoreCourseOffline service.
 */
export const MANUAL_COMPLETION_TABLE = 'course_manual_completion';
export const OFFLINE_SITE_SCHEMA: CoreSiteSchema = {
    name: 'CoreCourseOfflineProvider',
    version: 1,
    tables: [
        {
            name: MANUAL_COMPLETION_TABLE,
            columns: [
                {
                    name: 'cmid',
                    type: 'INTEGER',
                    primaryKey: true,
                },
                {
                    name: 'completed',
                    type: 'INTEGER',
                },
                {
                    name: 'courseid',
                    type: 'INTEGER',
                },
                {
                    name: 'coursename',
                    type: 'TEXT',
                },
                {
                    name: 'timecompleted',
                    type: 'INTEGER',
                },
            ],
        },
    ],
};

export type CoreCourseStatusDBRecord = {
    id: number;
    status: string;
    previous: string;
    updated: number;
    downloadTime: number;
    previousDownloadTime: number;
};

export type CoreCourseManualCompletionDBRecord = {
    cmid: number;
    completed: number;
    courseid: number;
    coursename: string;
    timecompleted: number;
};