
-- Option 1 store referral data on json;
CREATE TABLE user_profile (
    user_id serial PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    profile_pic VARCHAR,
    locale VARCHAR,
    timezone INTEGER,
    gender VARCHAR,
    last_modified TIMESTAMP NOT NULL DEFAULT now(),
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    last_ad_referral jsonb
);

-- Option 2 second table with reference;
CREATE TABLE ad_referral (
    ad_id serial PRIMARY KEY,
    source VARCHAR,
    type VARCHAR
);

CREATE TABLE user_profile (
    user_id serial PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    profile_pic VARCHAR,
    locale VARCHAR,
    timezone INTEGER,
    gender VARCHAR,
    last_modified TIMESTAMP NOT NULL DEFAULT now(),
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    last_ad_referral serial,
    CONSTRAINT fk_ad_referral_id
      FOREIGN KEY(last_ad_referral) 
	    REFERENCES ad_referral(ad_id)
);

