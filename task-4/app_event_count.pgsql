-- make prepare statement
-- select count where
    --  month in timestamp is equal to number given
    --  bot_id = parameter


-- Example population script
-- INSERT INTO app_events(bot_id, event_id, aggregate_type, aggregate_id, event_type, event_data)
-- VALUES('121212', '12312123', 'aadsdsadsd', '12313231', 'VisitState', '{"StateName": "reorder-allergy-info"}');

-- takes month as int and bot_id as text  
PREPARE appeventcount(int, text) AS
        SELECT COUNT(*) FROM app_events WHERE bot_id=$2 
        AND extract(month from created_at)=$1
        AND event_type = 'VisitState'
        AND ((event_data ->> 'StateName' ) = 'reorder-allergy-info' OR (event_data ->> 'StateName') ='reorder' OR (event_data ->> 'StateName')='reorder-pay');

EXECUTE appeventcount(8, '121212');

-- How I would increase performance?
-- Would move event_data to their own table (e.g app_event_data) and replace event_data with event_data_id.
-- new table with json data.
-- then create a left join that includes data StateName.
-- filter with stateName.