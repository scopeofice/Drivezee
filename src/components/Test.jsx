import React from 'react'

export default function Test() {
  return (
    <div>
      select `i`.`id` AS `instructortbl_id`,`i`.`name` AS
      `instructor_name`,`b`.`id` AS `id`,`b`.`user_id` AS
      `user_id`,`b`.`instructor_id` AS `instructor_id`,`b`.`booking_date` AS
      `booking_date`,`b`.`booking_time` AS `booking_time`,`b`.`booking_day` AS
      `booking_day`,`b`.`postal_code` AS `postal_code`,`b`.`address` AS
      `address`,`b`.`course_type` AS `course_type`,`b`.`need_car` AS
      `need_car`,`b`.`course_amt` AS `course_amt`,`b`.`total_amt` AS
      `total_amt`,`b`.`payment_id` AS `payment_id`,`b`.`del_flg` AS
      `del_flg`,`b`.`created_at` AS `created_at` from (`u460835845_drivezee2`.`instructors`
      `i` join `u460835845_drivezee2`.`booking` `b` on(`i`.`id` = `b`.`instructor_id`))
    </div>
  );
}
